from scipy.optimize import bisect;import math;x=bisect(lambda t:t*t-2,0,2,xtol=1e-12);print(math.isclose(x*x,2,abs_tol=1e-10))
