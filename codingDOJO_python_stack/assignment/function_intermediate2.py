#1
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
x[1][0]=15
students[0]['last_name']='Bryant'
sports_directory['soccer'][0]='Andres'
z[0]['y']=30
#print(x)
#print(students)
#print(sports_directory)
#print(z)

#2
def iterateDictionary(students):
  for i in range(len(students)):
    print(students[i].keys())
    print(students[i].values())
    print(students[i].items())
iterateDictionary([
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ])   
#3
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def iterateDictionary2(key_name, some_list):
  for i in range(len(some_list)):
    print(some_list[i][key_name])
    
iterateDictionary2('last_name',students)
#4
def printInfo(dojo):
    list_key = dojo.keys()
    for i in list_key:
        len_value = len(dojo[i])
        print("{} {}".format(len_value, i.upper()))
        for j in dojo[i]:
            print(j)
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)                        
