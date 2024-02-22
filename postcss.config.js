module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5, // 设计图页面宽度为375, 划分成10份, 指定1rem=37.5 rootValue值可以自己设置
      propList: ["*"],
    },
  },
};
