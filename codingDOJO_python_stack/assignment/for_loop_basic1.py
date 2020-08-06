#1
for i in range(151):
	print(i)
#2
for i in range(5,1001,5):
	print(i)
#3
for i in range(101):
	
	if i%10==0:
		print('CodingDojo')
	elif i%5==0:
		print('Coding')
	else:
		print(i)	
#4
def a():
 	sum=0
	for i in range(500001):
		if i%2!=0:
			sum+=i
print(a())
#4A
a=[]
for i in range(500001):
	if i%2!=0:
		a.append(i)
print(sum(a))
#5
for i in range(2018,0,-4):
	print(i)
'''
def a():
	sum=0
	for i in range(500001):
		if i%2!=0:
			sum+=i
	print(sum)
a()
'''
#6 input->2 9 3
(lowNum,highNum,mult)=map(int,input().split())
for i in  range(lowNum,highNum+1,1):
	if i%mult==0:
		print(i)
