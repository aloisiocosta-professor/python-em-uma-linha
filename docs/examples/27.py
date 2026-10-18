exec("from concurrent.futures import ThreadPoolExecutor\nwith ThreadPoolExecutor(max_workers=2) as pool:print(list(pool.map(abs,[-2,-1,0])))")
