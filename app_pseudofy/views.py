import json
from django.shortcuts import render
from django.http import JsonResponse
from .marker import main_marker

# Create your views here.
def index(request):
    return render(request, 'index.html')

def generate(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        text = data.get("text", "")
        language = data.get("language", "").lower()
        if not text:
            return JsonResponse(
                {
                    'status': 'error',
                    'text': 'No text provided!',
                }
            )
        if not language:
            return JsonResponse(
                {
                    'status': 'error',
                    'text': 'No language provided!',
                }
            )
        response, result = main_marker(text, language)
        return JsonResponse(
            {
                'status': f'{response}',
                'text': f'{result}',
            }
        )
    else:
        return JsonResponse(
            {
            'status': 'error',
            'text': 'Invalid request method!',
            }
        )