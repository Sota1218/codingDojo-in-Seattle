class user:
	def __init__(self, name):
		self.name = name
		self.account = BankAccount(int_rate=0.5,balance=0)
class BankAccount:
	def __init__(self, int_rate, balance):
		self.int=int_rate
		self.balance=balance
	def deposit(self, amount):
		# your code here
		self.balance+=amount
		return self
	def withdraw(self, amount):
		# your code here
		if self.balance<amount:
			print('Insufficient funds: Charging a $5 fee')
			self.balance+=5
		else:	
			self.balance-=amount
		return self
	def display_account_info(self):
		# your code here
		print('Balance: $'+str(self.balance))
		return self
	def yield_interest(self):
		# your code here
		self.balance*=self.int
		return self	
sota=user('sota')
sota.account.deposit(8).yield_interest().display_account_info()
'''guido=user('guido')
monty=user('monty')
sota=user('sota')
guido.make_deposit(3).make_withdrawal(1).display_user_balance()
monty.make_deposit(2).make_withdrawal(2).display_user_balance()
sota.make_deposit(1).make_withdrawal(3).display_user_balance()
sss=BankAccount(3,0)
sss.deposit(3).withdraw(1).yield_interest().display_account_info()
aaa=BankAccount(3,0)
aaa.deposit(2).withdraw(4).yield_interest().display_account_info()
'''