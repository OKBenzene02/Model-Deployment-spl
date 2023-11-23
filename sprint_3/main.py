# Home page

from flask import render_template, url_for, request, redirect, flash
import os
from werkzeug.utils import secure_filename
import spacy
import pytesseract as tess
import PIL.Image
from flask import Flask, url_for

app = Flask(__name__)

app.secret_key = "random_secret_key"

app.config['UPLOAD_FOLDER'] = 'static\\uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

tess.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'
nlp = spacy.load('en_core_web_sm')

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def preprocess_text(text):
    doc = nlp(text)
    tokens = [token.text.lower() for token in doc if not token.is_stop and not token.is_punct]
    return tokens

def extract_information(text, keywords):
    preprocessed_text = preprocess_text(text)
    information = {}

    for keyword in keywords:
        if keyword in preprocessed_text:
            # You can extract information related to the keyword here
            # For example, you can extract sentences containing the keyword
            sentences_containing_keyword = [sent.text for sent in nlp(text).sents if keyword in preprocess_text(sent.text)]
            information[keyword] = sentences_containing_keyword

    return information


@app.route('/')
@app.route('/home', methods=['GET', 'POST'])
def home_html():
    text = ''
    if request.method == 'POST':

        if 'image' not in request.files:
            flash('No file part')
            return redirect(request.url)

        file = request.files['image']

        if file.filename == '':
            flash('No image selected for uploading')
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            flash('Image successfully uploaded')
            text = tess.image_to_string(PIL.Image.open(f"static\\uploads\\{filename}"))
            
    keywords = ["company","experience","officer","gmail"]
    information = extract_information(text, keywords)
        
    return render_template("home.html", image_name=None, information=information)

@app.route('/about')
def about_html():
    return render_template('about.html')

@app.route('/contributors')
def contributors_html():
    return render_template('contributors.html')

if __name__ == "__main__":
    app.run(debug=True)