exec("class Vetor:\n def __init__(self,x,y):self.x=x;self.y=y\n def __add__(self,o):return Vetor(self.x+o.x,self.y+o.y)\nv=Vetor(1,2)+Vetor(3,4);print(v.x,v.y)")
