import geckos from '@geckos.io/server';

const io = geckos();

io.onConnection((channel) => {
  channel.on('message', (data: {}) => {
    console.log('data ----->', data);
    channel.emit('test', { ...data, serverDate: new Date().toISOString() });
  });
});

io.listen();
