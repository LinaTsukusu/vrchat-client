# vrchat-client
[![Build Status](https://travis-ci.org/LinaTsukusu/vrchat-client.svg?branch=master)](https://travis-ci.org/LinaTsukusu/vrchat-client)
[![Maintainability](https://api.codeclimate.com/v1/badges/398324dfe83c38451044/maintainability)](https://codeclimate.com/github/LinaTsukusu/vrchat-client/maintainability)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm](https://img.shields.io/npm/dt/vrchat-client.svg)](https://www.npmjs.com/package/vrchat-client)  
> Unofficial VRChat API Client for Node.js

## Usage
### Getting started
```bash
npm i vrchat-client
# OR
yarn add vrchat-client
```

```typescript
import vrc from 'vrchat-client'
// or
const vrc = require('vrchat-client')

// all methods return Promise
const api = await vrc.login(username, password)
```

### User API
- User info
```javascript
api.user.getUserInfo()
```

- Update user info
```javascript
api.user.updateUserInfo({
  email: "example@example.com",
  birthday: "",
  status: "active",
  statusDescription: "comment"
})
```

- Get friends list
```javascript
api.user.getFriends({
  offset: 1,
  n: 1,
  offline: false,
})
```

- get friend status
```javascript
api.user.getFriendStatus('user id')
```

- Send friend request
```javascript
api.user.sendFriendRequest('user id')
```

- Unfriend
```javascript
api.user.unfriend('user id')
```

- Accept friend request
```javascript
api.user.acceptFriend('notification id')
```

- Get user by ID
```javascript
api.user.getById('user id')
```

- Get user by name
```javascript
api.user.getByName('user name')
```

- Get user list
```javascript
// All Users
api.user.search.all({
  search: '',
  n: 1,
  offset: 1,
  developerType: 'none'
})
```

### Favorite API
- Add Favorite
```javascript
api.favorite.add('type', 'object id')
// ?
api.favorite.add.avatar('avatar id')
api.favorite.add.world('world id')
api.favorite.add.user('user id')
```

- Get favorite
```javascript
api.favorite.getInfo('favorite id')
```

- List Favorite
```javascript
api.favorite.list('type')
```

- Delete  favorite
```javascript
api.favortite.delete('favorite id')
```

### World API
- Get by id
```javascript
api.world.getById('world id')
```

- List worlds
```javascript
api.world.search.all({
  options: any
})
```

- Delete world
```javascript
api.world.delete('world id')
```

- Get world meta data
```javascript
api.world.getMetadata('world id')
```

- Get instance with tags
```javascript
api.world.getInstanceWithTags('world id', 'instance id')
```

### Avatar API
- Get by ID
```javascript
api.avatar.getById('avatar id')
```

- Choose avatar
```javascript
api.avatar.choose('avatar id')
```

- List avatar
```javascript
api.avatar.search({
  options: any,
})
```

### Moderation API
- Send moderation
```javascript
api.moderation.send('user id')
```

- Send player moderation
```javascript
// Block user
api.moderation.block('user id')
// Unblock user
api.moderation.unblock('user id')
// Mute user
api.moderation.mute('user id')
// Unmute
api.moderation.unmute('user id')
```

- Delete moderation
```javascript
api.moderation.delete('moderation id')
```

- Clear all moderation
```javascript
api.moderation.clear('user id')
```

- Get against
```javascript
api.moderation.getAgainstSelf()
```

- Get player's
```javascript
api.moderation.getSentlist()
```

### Notification API
- Send notification
```javascript
api.notification.send.friendRequest('user id')
api.notification.send.invite('user id', 'world id', 'message')
```

- Mark as read
```javascript
api.notification.markAsRead('notification id')
```

- Delete notification
```javascript
api.notification.delete('notification id')
```

- Get all notification
```javascript
api.notification.getAll({
  type: 'type',
  send: true,
  after: 'date',
})
```
