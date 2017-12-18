 $(function() {
   alert("NOTE: Tracks may not be public, don't go on private property etc etc. You accept all responsiblity");

   setTimeout(function() {
     $.get('/tracks/tracks.json', function(data) {
       async.eachOfLimit(data, 5, GrabData, function() {
         $('#loader').remove();
       });
     });
   }, 1000);
 });

 function GrabData(file, key, cb) {
   $.get(file.path, function(data) {
     var lines = data.split('\n');

     async.eachOfLimit(lines,
       10,
       function(line, key, next) {
         var coords = line.split(',');
         DrawWaypoints(file.path, coords[1], coords[2], next);
       },
       function() {
         cb();
       }
     );

   });
 }

 function DrawWaypoints(file, lat, long, cb) {
   if (!lat || !long) {
     return cb();
   }

   var pos = {
     lat: parseFloat(lat.replace('S', '-')),
     lng: parseFloat(long.replace('E', ''))
   };

   console.log(pos);

   var marker = new google.maps.Marker({
     map: map,
     position: pos,
     title: file
   });

   cb();
 }