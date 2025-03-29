import os
import shutil
from PIL import Image

def merge_images(tile_size, pos):
	background = Image.new("RGB", (target_tile_size, target_tile_size), color="black")

	pou = pow(2, pos[3])
	hit = False
	for x in range(pou):
		for y in range(pou):
			file_name = str(pos[0]+(x*medivia_tile_size)) + "_" + str(pos[1]+(y*medivia_tile_size)) + "_" + str(pos[2]) + "_" + str(pos[3]) + ".png"
			file_dir = medivia_map_folder + file_name
			print(file_dir)

			if os.path.isfile(file_dir):
				hit = True
				img = Image.open(file_dir)
				background.paste(img, (x*int(target_tile_size/pou),y*int(target_tile_size/pou)))
				img.close()

	if not hit:
		return 0

	return background


# def slice_image(image_path, tile_size):
#     img = Image.open(image_path)
#     img_width, img_height = img.size
#     tiles = []

#     for left in range(0, img_height, tile_size):
#         for top in range(0, img_width, tile_size):
#             box = (left, top, min(left + tile_size, img_width), min(top + tile_size, img_height))
#             tiles.append(img.crop(box))
    
#     img.close()
#     return tiles

def create_folders(folder_path):
	if not os.path.exists(folder_path):
		os.makedirs(folder_path)
	for floor in range(floors):

		file_dir = folder_path + str(floor)
		if not os.path.exists(file_dir):
			os.makedirs(file_dir)
		for zoom_level in range(zoom_levels):

			file_dir = folder_path + str(floor) + "/" + str(zoom_level)
			if not os.path.exists(file_dir):
				os.makedirs(file_dir)
			for x in range(int(map_width / target_tile_size)*pow(2, zoom_level) ):

				file_dir = folder_path + str(floor) + "/" + str(zoom_level) + "/" + str(x)
				if not os.path.exists(file_dir):
					os.makedirs(file_dir)					
	return 0

# default medivia filenames are separated by 48 tiles
medivia_tile_size = 48
medivia_pos = 30000
target_tile_size = 768
# multiplicative by 768
map_width = 5376
map_height = 5376
zoom_levels = 5;
floors = 31;

# folder where your medivia maps are cached
medivia_map_folder = "C:/Users/USERNAME/medivia/minimap_cache" + "/"
# folder where tiles for mapper gonna be created
map_folder = "C:/Users/USERNAME/Desktop/mapper/map" + "/"
# create folders for maps if it doesn't exist
create_folders(map_folder)

for floor in range(floors):
	leaflet_zoom = zoom_levels - 1
	for zoom_level in range(zoom_levels):

		true_x = 0
		for x in range(0,map_width,medivia_tile_size*pow(2, zoom_level)):
			true_y = 0
			for y in range(0,map_height,medivia_tile_size*pow(2, zoom_level)):

				if(zoom_level==0):
					file_name = str(medivia_pos+x) + "_" + str(medivia_pos+y) + "_" + str(floor) + "_" + str(zoom_level) + ".png"
					file_dir = medivia_map_folder + file_name
					print(file_dir)

					if os.path.isfile(file_dir):
						shutil.copy(file_dir,f"{map_folder}{floor}/{leaflet_zoom}/{true_x}/{true_y}.png")
					# else:
					# 	img = Image.new("RGB", (target_tile_size, target_tile_size), color="black")
					# 	img.save(f"{map_folder}/{floor}/{leaflet_zoom}/{true_x}/{true_y}.png")

				if(zoom_level>0):
					pos = [medivia_pos+x, medivia_pos+y, floor, zoom_level]
					img = merge_images(target_tile_size, pos)
					if img:
						img.save(f"{map_folder}{floor}/{leaflet_zoom}/{true_x}/{true_y}.png")

				true_y +=1
			true_x +=1
		leaflet_zoom -= 1