window.LEVELS={
easy:[
["A container packages:",["An app with its dependencies","A whole OS kernel","Only data","Hardware"],0,"Consistent everywhere it runs."],
["Docker image vs container?",["Image is the template; container is a running instance","Same thing","Container is the file","Image is a process"],0,"Like a class and an object."],
["Cloud computing means:",["Renting computing resources over the internet","Weather software","Local-only servers","A file format"],0,"Pay for what you use."]],
medium:[
["A Dockerfile is:",["Instructions to build an image","A running container","A database","A log"],0,"FROM, COPY, RUN, CMD."],
["Containers vs virtual machines:",["Containers share the host kernel and are lighter","Containers include a full OS each","VMs are lighter","No difference"],0,"Faster to start, smaller."],
["Data written inside a container is:",["Lost when the container is removed unless using a volume","Kept forever","Sent to git","Encrypted"],0,"Use volumes or external storage."]],
hard:[
["Why is the order of Dockerfile instructions important?",["Layers are cached; put rarely-changing steps (dependencies) first","Docker reads backwards","It isn't","Only for size"],0,"Copy requirements before source for faster builds."],
["Running a container as root is risky because:",["A breakout gives attackers more power; use a non-root user","Root is slow","It's blocked","It uses more RAM"],0,"Least privilege."],
["A pod/container is killed and restarted. What should your app assume?",["Local state is gone; store state externally and handle restarts","State persists","It never restarts","Restarts are free"],0,"Design stateless, disposable processes."]]
};
