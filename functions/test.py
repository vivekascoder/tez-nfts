import requests

r = requests.post(
    "https://us-central1-tez-nfts.cloudfunctions.net/sendWelcomeEmail",
    data={
        "email": "vivek@instaraise.io"
    }
)

print(r.text)
