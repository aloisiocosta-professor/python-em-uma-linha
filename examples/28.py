exec("import asyncio\nasync def tarefa(x):\n await asyncio.sleep(0)\n return x*x\nasync def main():print(await asyncio.gather(tarefa(2),tarefa(3)))\nasyncio.run(main())")
