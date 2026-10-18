from functools import reduce;trans={(0,'0'):0,(0,'1'):1,(1,'0'):1,(1,'1'):0};print(reduce(lambda q,c:trans[q,c],'1011',0)==0)
