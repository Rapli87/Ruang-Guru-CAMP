async function process_argv() {
  let { argv } = process;
  argv = argv.slice(2);
  const result = await studentActivitiesRegistration(argv);

  return result;
}

async function getStudentActivities() {
  const response = await fetch("http://localhost:3001/activities");
  return response.json();
}

async function studentActivitiesRegistration(data) {
  try {
    const [choose, ...parameter] = data;
    if (choose === "DELETE") {
      const [id] = parameter;
      const responsesdelete = await fetch(
        `http://localhost:3001/students/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return responsesdelete.json();
    } else if (choose === "CREATE") {
      const [nama, hari] = parameter;
      const aktivitas = await getStudentActivities();
      const newaktivitas = aktivitas.filter((aktivitass) =>
        aktivitass.days.includes(hari)
      );
      const murid = {
        name: nama,
        activities: newaktivitas.map((aktivitass) => ({
          name: aktivitass.name,
          desc: aktivitass.desc,
        })),
      };
      const responsescreate = await fetch("http://localhost:3001/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(murid),
      });
      return responsescreate.json();
    } else {
      throw new Error(`wrong`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function addStudent(name, day) {
  try {
    const activities = await getStudentActivities();
    const filteredActivities = activities.filter((activity) =>
      activity.days.includes(day)
    );
    const student = {
      name,
      activities: filteredActivities.map((activity) => ({
        name: activity.name,
        desc: activity.desc,
      })),
    };
    const response = await fetch("http://localhost:3001/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    return response.json();
  } catch (error) {
    console.error("Error adding student:", error);
  }
}

async function deleteStudent(id) {
  try {
    const response = await fetch(`http://localhost:3001/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

process_argv()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  studentActivitiesRegistration,
  getStudentActivities,
  addStudent,
  deleteStudent,
};
