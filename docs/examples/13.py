from bisect import bisect_left;xs=[1,3,5,7];x=5;i=bisect_left(xs,x);print(i,i<len(xs) and xs[i]==x)
