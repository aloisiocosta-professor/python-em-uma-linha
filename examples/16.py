exec("from collections import deque\ng={0:[1,2],1:[3],2:[3],3:[]};q=deque([0]);d={0:0}\nwhile q:\n u=q.popleft()\n for v in g[u]:\n  if v not in d:d[v]=d[u]+1;q.append(v)\nprint(d[3])")
