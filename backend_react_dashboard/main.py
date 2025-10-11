from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
from sklearn.metrics import confusion_matrix, accuracy_score, precision_score, recall_score, f1_score

app = FastAPI()

# CORS for React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"],  # ADD URL HERE
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load data
predictions = pd.read_csv('E:/tvb_25/ML_model/bot_human_predictions.csv')
user_summary = pd.read_csv('user_level_predictions.csv')


@app.get("/api/metrics")
def get_metrics():
    accuracy = accuracy_score(predictions['actual_label'], predictions['predicted_label'])
    precision = precision_score(predictions['actual_label'], predictions['predicted_label'])
    recall = recall_score(predictions['actual_label'], predictions['predicted_label'])
    f1 = f1_score(predictions['actual_label'], predictions['predicted_label'])

    return {
        "total_predictions": len(predictions),
        "predicted_bots": int((predictions['predicted_class'] == 'Bot').sum()),
        "predicted_humans": int((predictions['predicted_class'] == 'Human').sum()),
        "accuracy": float(accuracy),
        "precision": float(precision),
        "recall": float(recall),
        "f1_score": float(f1)
    }


@app.get("/api/confusion-matrix")
def get_confusion_matrix():
    cm = confusion_matrix(predictions['actual_label'], predictions['predicted_label'])
    return {
        "matrix": cm.tolist(),
        "labels": ["Bot", "Human"]
    }


@app.get("/api/predictions")
def get_predictions(limit: int = 100, classification: str = None):
    df = predictions.copy()
    if classification:
        df = df[df['predicted_class'] == classification]

    return df.head(limit).to_dict(orient='records')


@app.get("/api/confidence-distribution")
def get_confidence_distribution():
    bot_conf = predictions[predictions['predicted_class'] == 'Bot']['confidence'].tolist()
    human_conf = predictions[predictions['predicted_class'] == 'Human']['confidence'].tolist()

    return {
        "bots": bot_conf,
        "humans": human_conf
    }


@app.get("/api/top-bots")
def get_top_bots(limit: int = 20):
    bots = predictions[predictions['predicted_class'] == 'Bot'].sort_values('confidence', ascending=False).head(limit)
    return bots[['username', 'confidence', 'bot_probability', 'human_probability', 'actual_class']].to_dict(
        orient='records')


@app.get("/api/top-humans")
def get_top_humans(limit: int = 20):
    humans = predictions[predictions['predicted_class'] == 'Human'].sort_values('confidence', ascending=False).head(
        limit)
    return humans[['username', 'confidence', 'bot_probability', 'human_probability', 'actual_class']].to_dict(
        orient='records')


@app.get("/api/uncertain")
def get_uncertain(limit: int = 20):
    uncertain = predictions.iloc[(predictions['confidence'] - 50).abs().argsort()].head(limit)
    return uncertain[
        ['username', 'predicted_class', 'confidence', 'bot_probability', 'human_probability', 'actual_class']].to_dict(
        orient='records')