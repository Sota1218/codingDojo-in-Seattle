#1
def biggie_size(a):
  for i in range(len(a)):
    if a[i]>0:
      a[i]="big"
    
  return a
print(biggie_size([-1, 3, 5, -5]))
#2
def count_positives(a):
  count=0
  for i in range(len(a)):
    if a[i]>0:
      count+=1
  a[len(a)-1]=count
  return a
print(count_positives([-1,2,3,4,45]))
#3
def sum_total(a):
  return sum(a)
print(sum_total([1,2]))
#4
def average(a):
  return sum(a)/len(a)
print(average([1,2,3,4,5]))
#5
def length(a):
  return len(a)
print(length([1,4,3,2,1,1])) 
#6
def minimum(a):
  return min(a)
print(minimum([1,4,3,2,1,1])) 
#7
def maximum(a):
  return max(a)
print(maximum([1,4,3,2,1,1])) 
#8
def ultimate_analysis(a):
  s=sum(a)
  m=min(a)
  x=max(a)
  ave=s/len(a)
  return {'sumTotal': s, 'average': ave, 'minimum': m, 'maximum': x, 'length': len(a) }
print(ultimate_analysis([2,4,10]))
#9
def reverse_list(a):
  b = list(reversed(a))
  return b
print(reverse_list([2,56,-9,1]))  