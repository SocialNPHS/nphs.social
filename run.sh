# Start a sass watcher and a server running simultaneously. Store the PIDs in a
# text file so that the processes can be easily stopped.

(
  lite-server &
  echo $! > .pids.txt &
  sass --watch sass:css --style=compressed &
  echo $! >> .pids.txt &
) &> log.txt
