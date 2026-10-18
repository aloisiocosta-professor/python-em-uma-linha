merge=lambda a,b:tuple(map(max,zip(a,b)));a=(2,0);b=(0,3);print(merge(a,b),merge(a,b)==merge(b,a),merge(a,a)==a)
