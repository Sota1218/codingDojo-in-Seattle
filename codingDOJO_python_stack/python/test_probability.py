# dice=[a,b,c,d,e]
import numpy as np
import math


def Count(dice, number):
    return len([y for y in dice if y == number])


def RepeatingNumber(dice, minRepeats):
    unique = set(dice)
    repeats = [Count(dice, x) for x in unique if Count(dice, x) >= minRepeats]
    return repeats if repeats else 0


dice = [1, 3, 4, 4, 4]
# print(sorted(RepeatingNumber(dice, 1)))


def Straight(dice):
    return True if tuple(sorted(dice)) == (2, 3, 4, 5, 6) or (1, 2, 3, 4, 5) else False

######################
#####probability######
######################


def Fullhouse_probability(dice):
    S = sorted(RepeatingNumber(dice, 1))
    return '33.3%' if S == [1, 2, 2] else '16.7%' if S == [1, 1, 3] or S == [1, 4] else '13.9%' if len(S) == 1 else '2.3%'


print(Fullhouse_probability(dice))


def Yahtzee_probability(dice):
    S = sorted(RepeatingNumber(dice, 1))
    return '16.7%' if S == [1, 4] else '2.78%' if S == [1, 1, 3] or S == [2, 3] else '0.46%' if S == [1, 1, 1, 2] or [1, 2, 2] else '0.08%'


def straight_probablity(dice, x):
    one_count = [i for i in dice if i == 1]
    six_count = [i for i in dice if i == 6]
    if len(one_count) > 0 and len(six_count) > 0:
        S = sorted(RepeatingNumber(dice, 1))
        T = S[x > 1]
        T -= 1
        Q = np.sum(T)
        P = (1/6)*(Q+1)*math.factorial(Q)
        return P
    else:
        S = sorted(RepeatingNumber(dice, 1))
        T = S[x > 1]
        T -= 1
        Q = np.sum(T)
        P = (1/6)*Q*math.factorial(Q)
        return P
