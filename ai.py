import sys
from joblib import load
import pandas as pd


#تعديل عبدالله اليحيى
model = load('logistic_regression_model.joblib')

feature_names = ['gender', 'age', 'ever_married', 'avg_glucose_level', 'bmi']

data = [sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5]]

user_data_df = pd.DataFrame([data], columns=feature_names)
    
# استخدام النموذج للتنبؤ
predn = model.predict(user_data_df)
print("High" if predn[0] == 1 else "Low")
