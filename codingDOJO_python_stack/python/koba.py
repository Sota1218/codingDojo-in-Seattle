N = [100, 200, 500, 1000]
for a in range(len(N)-1):
    print("N="+str(N[a])+"までの時、２の倍数の和は" +
          str(sum([i for i in range(N[a]+1) if i % 2 == 0]))+"であり、3の倍数の和は、"+str(sum([i for i in range(N[a]+1) if i % 3 == 0]))+"であり、５の倍数の和は"+str(sum([i for i in range(N[a]+1) if i % 5 == 0]))+"である。")
