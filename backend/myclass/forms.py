from django import forms
from .models import Teachers
# noT needed
class TeachersForm(forms.ModelForm):
	class Meta:
		model = Teachers
		fields = ["NAME","COURSE"]