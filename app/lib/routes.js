FlowRouter.route('/', {
  name: 'home',
  action() {
    FlowRouter.go('profile');
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('layoutPublic', {header: 'menuDefault', content: 'login'});
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
    BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'profile'});
  }
});

FlowRouter.route('/devices', {
  name: 'devices',
  action() {
    BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'devices'});
  }
});

FlowRouter.route('/orgs', {
  name: 'orgs',
  action() {
    BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'orgs'});
  }
});

FlowRouter.route('/projects', {
  name: 'projects',
  action() {
    BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'projects'});
  }
});

FlowRouter.route('/residencies', {
  name: 'residencies',
  action() {
    BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'residencies'});
  }
});

FlowRouter.route('/arpview', {
  name: 'arpview',
  action() {
    BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'arpview'});
  }
});

FlowRouter.route('/admin', {
  name: 'admin',
  action() {
    BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'admin'});
  }
});

var publicRoutes = FlowRouter.group({
  name: 'public',
  prefix: '/public'
});

publicRoutes.route('/whosthere', {
  name: 'whosthere',
  action() {
    if (Meteor.userId()) {
      BlazeLayout.render('layoutDefault', {header: 'menuDefault', content: 'whosthere'});
    }
    else {
      BlazeLayout.render('layoutPublic', {content: 'whosthere'});
    }
  }
});