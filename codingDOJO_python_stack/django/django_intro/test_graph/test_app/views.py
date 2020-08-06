from django.http import HttpResponse
from django.shortcuts import render
import io
import matplotlib.pyplot as plt
import random
# png画像形式に変換数関数


def plt2png():
    buf = io.BytesIO()
    plt.savefig(buf, format='png', dpi=100)
    s = buf.getvalue()
    buf.close()
    return s


# html表示view
def analysis_screen(request):
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return render(request, 'analysis.html', {'arr': arr})

# 画像埋め込み用view


def img_plot(request):
    n = 100
    x = [i for i in range(n)]
    y = [random.randint(1, 100) for a in range(n)]
    request.session['max'] = max(y)
    request.session['ave'] = sum(y)/n
    plt.plot(x, y)
    png = plt2png()
    response = HttpResponse(png, content_type='image/png')
    return response
