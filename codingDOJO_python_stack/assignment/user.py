class user:
	def __init__(self, name):
		self.name = name
		self.account_balance = 0
	def make_deposit(self, amount):	
		self.account_balance += amount
	def make_withdrawal(self,amount):
		self.account_balance -= amount
	def display_user_balance(self):
		print("User:"+self.name+", Balance:"+str(self.account_balance))
guido=user('guido')
monty=user('monty')
sota=user('sota')
guido.make_deposit(3)
guido.make_withdrawal(1)
guido.display_user_balance()
monty.make_deposit(2)
monty.make_withdrawal(2)
monty.display_user_balance()
sota.make_deposit(1)
sota.make_withdrawal(3)
sota.display_user_balance()

		