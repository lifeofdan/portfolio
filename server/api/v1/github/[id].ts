export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const project = getRouterParam(event, "id");
  let projectName = "";

  switch (project) {
    case "enrollable":
      projectName = "eable";
      break;
    case "relay":
      projectName = "relay";
      break;
    case "food_diary_helper":
      projectName = "food_diary_helper";
    default:
      break;
  }

  try {
    const payload: { pushed_at?: string } = await $fetch(
      `https://api.github.com/repos/lifeofdan/${projectName}`,
      {
        headers: {
          Authorization: `Bearer ${config.githubAccessToken}`,
        },
      },
    );
    return {
      updated_at: payload.pushed_at ?? "",
    };
  } catch (e) {
    const error = e as { name: string };

    return {
      error: error,
    };
  }
});
