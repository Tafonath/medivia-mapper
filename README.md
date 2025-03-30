This branch does not contain map files, everything else should be the identical.<br>
Maps and ore marks were downloaded from wiki, and then generated by scripts.<br>
<br>
=== Mapper ===<br>
<br>
Mapper accepts url parameters to share position example: https://tafonath.github.io/medivia-mapper/?x=2048&y=-2047&z=7&zoom=2<br>
Mapper itself uses leaflet library, with small modifications.<br>
<br>
==== Generating maps ====<br>
<br>
Maps folder is structured as following: floor/zoom/x/y.png<br>
I wrote python script that merges images straight from medivia cache folder as 768px tiles and exports them as leaflet tilemaps.<br>
If u want to generate maps urself, i included "create.py", where you have to specify 2 paths, one for medivia cache folder and the second, where to save generated maps.<br>
It requires pillow python library https://pypi.org/project/pillow/ and generating could take couple mins (depends on your CPU and amount of files in cache folder)<br>
<br>
=== Generating ores ===<br>
<br>
Similar thing as above, use python script "markers.py" on your config.otml<br>
