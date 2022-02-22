import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('express app', () => {
  it('should be listening for requests', (done) => {
    chai.request(app)
      .get('/')
      .end((_err, res) => res.should.have.status(200));
    done();
  });
});
