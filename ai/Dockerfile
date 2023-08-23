FROM nvidia/cuda:11.4.2-devel-ubuntu20.04

RUN apt-get update && apt-get install -y python3.10 python3-pip
RUN pip install --upgrade pip

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "main.py"]