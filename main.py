from flask import Flask, render_template, url_for

application = Flask(__name__)


@application.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


@application.route("/")
def main():
    return render_template("main.html")


@application.route("/favorite_books")
def favorite_books():
    return render_template("favorite_books.html")


@application.route("/search_favorite_book")
def search_favorite_book():
    return render_template("search_favorite_book.html")


@application.route("/restoration_favorite_book")
def restoration_favorite_book():
    return render_template("restoration_favorite_book.html")


@application.route("/invitation_cooperation")
def invitation_cooperation():
    return render_template("invitation_cooperation.html")


if __name__ == "__main__":
    application.run(host='0.0.0.0')
