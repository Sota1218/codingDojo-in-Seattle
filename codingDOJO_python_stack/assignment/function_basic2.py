#1
def countdown(a):
  s=[]
  for i in range(a,-1,-1):
    s.append(i)
  print(s)  
countdown(8)  
#2
def print_and_return(a):
  print(a[0])
  return a[1]
print(print_and_return([3,4]))
#3
def first_plus_length(a):
  return a[0]+len(a)
#4
def values_greater_than_second(a):
  count=0
  l=[]
  if len(a)<2:
    return False
  for i in range(len(a)):
    if a[i]>a[1]:
      count+=1
      l.append(a[i])
  print(count)
  return l

#5
def length_and_value(a,b):
  l=[]
  for i in range(a):
    l.append(b)
  return l  
 