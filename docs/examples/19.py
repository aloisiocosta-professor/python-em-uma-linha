exec("p=list(range(4))\ndef find(x):\n while p[x]!=x:x=p[x]\n return x\np[find(1)]=find(0)\np[find(2)]=find(1)\nprint(find(0)==find(2),find(0)==find(3))")
