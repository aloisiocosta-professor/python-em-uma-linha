from scipy.integrate import solve_ivp;import math;r=solve_ivp(lambda t,y:-y,(0,1),[1.],rtol=1e-9,atol=1e-12);print(r.success,math.isclose(r.y[0,-1],math.exp(-1),rel_tol=1e-7))
