FROM --platform=linux/amd64 node:16

WORKDIR /workspace

RUN apt-get update
RUN apt-get install -y tmux

EXPOSE 8080
EXPOSE 8787
EXPOSE 4173

ARG USER=l1fe
ARG GROUP=l1fe
ARG UID=1001
ARG GID=1001
RUN groupadd -g ${GID} ${GROUP}
RUN useradd -u ${UID} -g ${GROUP} -s /bin/bash -m ${USER}

RUN mkdir -p /workspace/api/node_modules
RUN mkdir -p /workspace/app/node_modules
RUN chown ${UID}:${GID} /workspace/api/node_modules
RUN chown ${UID}:${GID} /workspace/app/node_modules
RUN chown -R ${USER}:${GROUP} /usr/local

USER ${UID}:${GID}

COPY .devcontainer/.tmux.conf /home/${USER}