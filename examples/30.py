antes=lambda a,b:all(x<=y for x,y in zip(a,b)) and any(x<y for x,y in zip(a,b));a=(1,0);b=(0,1);print(antes(a,b),antes(b,a))
