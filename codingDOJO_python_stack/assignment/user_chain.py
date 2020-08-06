class user:
	def __init__(self, name):
		self.name = name
		self.account_balance = 0
	def make_deposit(self, amount):	
		self.account_balance += amount
		return self
	def make_withdrawal(self,amount):
		self.account_balance -= amount
		return self
	def display_user_balance(self):
		print("User:"+self.name+", Balance:"+str(self.account_balance))
		return self
guido=user('guido')
monty=user('monty')
sota=user('sota')
guido.make_deposit(3).make_withdrawal(1).display_user_balance()
monty.make_deposit(2).make_withdrawal(2).display_user_balance()
sota.make_deposit(1).make_withdrawal(3).display_user_balance()
