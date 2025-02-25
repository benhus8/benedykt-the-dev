
FROM ubuntu:latest


ENV HUGO_VERSION=0.123.0
ENV GO_VERSION=1.20.5


RUN apt-get update && \
    apt-get install -y wget git ca-certificates curl && \

    curl -OL https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz && \
    rm go${GO_VERSION}.linux-amd64.tar.gz && \

    echo 'export PATH=$PATH:/usr/local/go/bin' >> /etc/profile && \
    export PATH=$PATH:/usr/local/go/bin && \

    wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    tar -zxvf hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    mv hugo /usr/local/bin/ && \
    rm hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz && \

    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


ENV PATH="/usr/local/go/bin:${PATH}"

WORKDIR /blog

COPY . .

RUN hugo --gc --minify --destination /public