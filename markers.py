def cleanShit(arg):
	return int(arg.strip())

markers_file = "C:/Users/USERNAME/medivia/config.otml"
txt = "C:/Users/USERNAME/medivia/ore.txt"

names =["CopperOres", "SilverOres", "PhenakiteOres", "ChalcopyriteOres", "VanadiniteOres", "BorniteOres", "WolframiteOres", "GoldOres", "CarnotiteOres", "HeliodorOres", "MeteoriteOres", "HellstoneOres"]

with open(markers_file) as fy:
	lines = fy.readlines()

f = open(txt, "a")
x = 1
beeg = [{}]

for line in lines:
	if " "+str(x)+':' in line:
		x+=1
		beeg.append({})
	yo = line.split(':')
	if len(yo) == 2:
		beeg[x-1].update({yo[0].strip():yo[1]})

for i in range(len(beeg)):
	print(beeg[i])
	if 'icon' in beeg[i]:
		clean = cleanShit(beeg[i]['icon'])
		if (clean > 23 and clean < 35):
			x = cleanShit(beeg[i]['x'])-30000
			y = (cleanShit(beeg[i]['y'])-30000)*-1
			z = cleanShit(beeg[i]['z'])
			f.write("L.marker(["+str(y)+", "+str(x)+"], {floor: "+str(z)+"}).addTo("+str(names[clean-24])+");\n")
f.close()