import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function topPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + topPosition(domElt.offsetParent);
}

export default class InfiniteScroll extends Component {
  constructor(props){
    super(props);
    this._attachScrollListener = this._attachScrollListener.bind(this);
    this._getDefaultLoader = this._getDefaultLoader.bind(this);
    this._detachScrollListener = this._detachScrollListener.bind(this);
    this._scrollListener = this._scrollListener.bind(this);
    this._loadMore = this._loadMore.bind(this);
  }
  _attachScrollListener() {
    if (!this.props.hasMore) {
      return;
    }
    window.addEventListener('scroll', this._scrollListener);
    window.addEventListener('resize', this._scrollListener);
  }
  _detachScrollListener(){
    window.removeEventListener('scroll', this._scrollListener);
    window.removeEventListener('resize', this._scrollListener);
  }
  _loadMore(pageNumber){
    this.props.loadMore(pageNumber);
  }
  _scrollListener(){
    var el = ReactDOM.findDOMNode(this);
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (topPosition(el) + el.offsetHeight - scrollTop - window.innerHeight < Number(this.props.threshold)) {
      this._detachScrollListener();
            // call loadMore after detachScrollListener to allow
            // for non-async loadMore functions
      var page = this.props.pageStart + 1;
      this._loadMore(page);
    }
  }
  _getDefaultLoader(){
    return (<div className='ng-loader'><div className='text-center'><i className='fa fa-spin fa-spinner fa-3x'></i></div></div>);
  }
  render() {
    this._attachScrollListener();
    return (
			<div>
				{this.props.children}
                {this.props.hasMore && (this.props.loader || this._getDefaultLoader())}
            </div>
    );
  }
}
InfiniteScroll.propTypes={
  pageStart: React.PropTypes.number,
  loadMore: React.PropTypes.func.isRequired,
  hasMore: React.PropTypes.bool.isRequired
};

InfiniteScroll.defaultProps={
  pageStart:0,
  threshold: 250
};

