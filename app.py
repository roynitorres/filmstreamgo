from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("inicio.html")

@app.route("/SobreNosotros")
def sobrenosotros():
    return render_template("SobreNosotros.html")

@app.route("/CombosDuo")
def combosduo():
    return render_template("CombosDuo.html")

if __name__== "__main__":
    app.run()
