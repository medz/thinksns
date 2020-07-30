import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:snsmax/pages/publish.dart';
import 'package:snsmax/widgets/custom-underline-tab-indicator.dart';

import 'FollowingMomentsWidget.dart';

class MainHomeLayout extends StatefulWidget {
  const MainHomeLayout({Key key}) : super(key: key);

  @override
  _MainHomeLayoutState createState() => _MainHomeLayoutState();
}

class _MainHomeLayoutState extends State<MainHomeLayout>
    with
        SingleTickerProviderStateMixin<MainHomeLayout>,
        AutomaticKeepAliveClientMixin<MainHomeLayout> {
  TabController controller;

  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    controller = TabController(length: 3, vsync: this, initialIndex: 0);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return Scaffold(
      appBar: AppBar(
        title: TabBar(
          controller: controller,
          tabs: tabBarBuilder(context),
          indicator: CustomUnderlineTabIndicator(
            borderSide: BorderSide(
              color: Theme.of(context).primaryColor,
              width: 3.0,
            ),
            insets: EdgeInsets.only(bottom: 4.0),
          ),
          indicatorWeight: 0,
          isScrollable: true,
          unselectedLabelStyle: Theme.of(context).textTheme.subtitle1,
          unselectedLabelColor: Theme.of(context).textTheme.subtitle1.color,
          labelStyle: Theme.of(context).textTheme.headline6,
          labelColor: Theme.of(context).primaryColor,
        ),
        centerTitle: false,
        actions: actionsBuilder(context),
      ),
      body: TabBarView(
        controller: controller,
        children: <Widget>[
          FollowingMomentsWidget(),
          Text('2'),
          Text('1'),
        ],
      ),
    );
  }

  List<Widget> tabBarBuilder(BuildContext context) {
    return [
      Tab(text: '关注'),
      Tab(text: '推荐'),
      Tab(text: '同城'),
    ];
  }

  List<Widget> actionsBuilder(BuildContext context) {
    return [
      sendMomentActionBuilder(context),
    ];
  }

  Widget sendMomentActionBuilder(BuildContext context) {
    return FlatButton.icon(
      onPressed: onSendMoment,
      textColor: Theme.of(context).primaryColor,
      icon: Icon(CupertinoIcons.photo_camera_solid),
      label: Text("发动态"),
    );
  }

  onSendMoment() {
    PublishPage.route(context);
  }
}