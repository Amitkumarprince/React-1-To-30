export const Practice = () => {
    const students = [];

    return (
        <>
            {/* <p>{students.length && "No student found" } </p> */}
            {/* 1st */}
            {/* <p>{students.length === 0 && "No student found" } </p> */}
            {/* 2nd */}
            {/* khali rahne per false = 0, bhara rahne per true is liye ! operator laga do */}
            {/* <p>{!students.length && "No student found" } </p> */}
            {/* 3rd */}
            {/* <p>{!Boolean(students.length) && "No student found" } </p> */}
            <p>{Boolean(!students.length) && "No student found" } </p>
            <p>Number of students: {students.length} </p>
        </>
    );
};