export default defineEventHandler(async (event) => {
    const uuid = "c21901c7-cda7-4195-817e-d8a1a93b653b";

    const { bodyweight_kg, measured_at } = await readBody(event);

    console.log(bodyweight_kg, measured_at);

    return {
        message: "yes",
    };
});
