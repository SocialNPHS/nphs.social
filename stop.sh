# Stop the processes stored in .pids.txt
kill $(cat .pids.txt)
rm -f .pids.txt
