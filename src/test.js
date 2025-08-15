function getResultByPath(path, obj) {
    console.log("rex",obj.data.results[1].status[0].type)
    //write your implementation here
     const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');
    const splittedPath = normalizedPath.split(".");
    let relPath = obj;
    for (let step of splittedPath) {
      console.log("step", step);
      relPath = relPath?.[step];
    }
    console.log("path", relPath);
    return relPath;
  
  }
  const path = "data.results[1].status[0].type";
  const obj = {
    data: {
      results: [
        { status: "completed", error: "" },
        { status: [{ type: "done" }, { type: "start" }], error: "" }
      ]
    }
  }
  getResultByPath(path, obj);