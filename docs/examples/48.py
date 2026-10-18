from functools import reduce;import math;x=reduce(lambda x,_:(x+2/x)/2,range(8),1.);print(math.isclose(x*x,2,abs_tol=1e-12))
